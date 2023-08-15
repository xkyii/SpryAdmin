package com.xkyii.spry.web.service;

import com.xkyii.spry.web.entity.SysUser;
import io.quarkus.hibernate.reactive.panache.common.WithSession;
import io.smallrye.mutiny.Uni;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.HashSet;
import java.util.Set;

@ApplicationScoped
public class SysPermissionService {

    @Inject
    SysRoleService roleService;

    /**
     * 获取用户的权限列表
     */
    @WithSession
    public Uni<Set<String>> getRolePermission(SysUser user) {
        // 管理员拥有所有权限
        return user.isAdmin()
            ? Uni.createFrom().item(Set.of("admin"))
            : roleService.selectRolePermissionByUserId(user.getUserId());
    }

    public Uni<Set<String>> getMenuPermission(SysUser sysUser) {
        Set<String> set = new HashSet<>();
        set.add("User");
        set.add("Admin");
        return Uni.createFrom().item(set);
    }
}
