package com.xkyii.spry.resource.gen;

import com.xkyii.spry.entity.Config;
import com.xkyii.spry.repository.ConfigRepository;
import io.quarkus.hibernate.orm.rest.data.panache.PanacheRepositoryResource;
import io.quarkus.rest.data.panache.ResourceProperties;

@ResourceProperties(path = "/api/config")
public interface ConfigResource extends PanacheRepositoryResource<ConfigRepository, Config, Long> {
}
