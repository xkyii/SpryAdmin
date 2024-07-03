package com.xkyii.spry.mapper;

import com.xkyii.spry.entity.Config;
import org.mapstruct.*;

@Mapper(config = MappingConfig.class)
public interface ConfigMapper {

    @Mapping(target = "id", ignore = true)
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void update(@MappingTarget Config target, Config source);
}
