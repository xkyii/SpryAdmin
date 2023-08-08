package com.xkyii.spry.web.service;

import com.xkyii.spry.common.dto.login.LoginCommand;
import com.xkyii.spry.common.dto.login.LoginOutput;
import com.xkyii.spry.framework.dto.AjaxResult;
import com.xkyii.spry.web.constant.AdminError;
import com.xkyii.spry.web.repository.SysUserRepository;
import com.xkyss.quarkus.server.error.ServerException;
import io.quarkus.elytron.security.common.BcryptUtil;
import io.quarkus.hibernate.reactive.panache.common.WithSession;
import io.smallrye.mutiny.Uni;
import io.smallrye.mutiny.unchecked.Unchecked;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.jboss.logging.Logger;

@SuppressWarnings("NonAsciiCharacters")
@ApplicationScoped
public class SysUserService {

    @Inject
    Logger logger;

    @Inject
    TokenService tokenService;

    @Inject
    SysUserRepository userRepository;

    @Inject
    SysPermissionService permissionService;

    @WithSession
    public Uni<LoginOutput> login(LoginCommand input) {
        String username = input.getUsername();
        return userRepository.find("userName", username).firstResult()
            .onItem().ifNull().failWith(new ServerException(AdminError.用户不存在, username))
            // 校验密码
            .onItem().invoke(Unchecked.consumer(u -> {
                boolean matches = BcryptUtil.matches(input.getPassword(), u.getPassword());
                if (!matches) {
                    throw new ServerException(AdminError.密码错误);
                }
            }))
            // 生成token
            .onItem().transform(u -> new LoginOutput(tokenService.generateToken(u)))
            ;
    }

    public Uni<AjaxResult> getInfo() {
        return Uni.createFrom().item(AjaxResult.success())
            .flatMap(r -> Uni.createFrom().item(r))
            ;
    }
}
