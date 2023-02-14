package com.xkyii.spry.admin.resource;


import com.xkyii.spry.admin.dto.login.LoginInput;
import com.xkyii.spry.admin.dto.login.RegisterInput;
import com.xkyii.spry.admin.dto.login.RegisterOutput;
import com.xkyii.spry.admin.dto.login.TokenOutput;
import com.xkyii.spry.admin.service.ISysUserService;
import io.smallrye.mutiny.Uni;
import jakarta.inject.Inject;
import jakarta.validation.Valid;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;


@Path("/user")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Tag(description = "系统用户")
public class SysUserResource {

    @Inject
    ISysUserService userService;

    @POST
    @Path("register")
    @Operation(summary = "注册用户", description = "注册用户")
    public Uni<RegisterOutput> register(@Valid RegisterInput input) {
        return userService.register(input);
    }

    @POST
    @Path("login")
    @Operation(summary = "登录用户", description = "登录用户")
    public Uni<TokenOutput> login(@Valid LoginInput loginInput) {
        return userService.login(loginInput);
    }
}
