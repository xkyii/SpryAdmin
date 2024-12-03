package com.xkyii.spry.repository;

import com.xkyii.spry.entity.Config;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ConfigRepository implements PanacheRepository<Config> {
}
