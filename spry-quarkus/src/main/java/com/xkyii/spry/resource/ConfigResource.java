package com.xkyii.spry.resource;

import com.xkyii.spry.entity.Config;
import com.xkyii.spry.mapper.ConfigMapper;
import com.xkyii.spry.repository.ConfigRepository;
import com.xkyss.quarkus.rest.error.RestException;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import static com.xkyii.spry.error.ErrorCode.角色不存在;


@Path("/api/config")
public class ConfigResource {

    @Inject
    ConfigRepository configRepository;

    @Inject
    ConfigMapper configMapper;

    @Transactional
    @PATCH
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Config patch(@PathParam("id") Long id, Config inConfig) {
        Config dbConfig = configRepository.findById(id);
        if (dbConfig == null) {
            throw new RestException(角色不存在);
        }

        configMapper.update(dbConfig, inConfig);
        configRepository.persist(dbConfig);
        return dbConfig;
    }
}
