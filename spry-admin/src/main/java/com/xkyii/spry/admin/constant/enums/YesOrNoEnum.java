package com.xkyii.spry.admin.constant.enums;


import com.xkyii.spry.admin.constant.CssTag;
import com.xkyii.spry.common.constant.DictionaryEnum;

/**
 * 系统内代表是与否的枚举
 * @author valarchie
 */
//@Dictionary(name = "sys_yes_no")
public enum YesOrNoEnum implements DictionaryEnum<Integer> {
    /**
     * 是与否
     */
    YES(1, "是", CssTag.PRIMARY),
    NO(0, "否", CssTag.DANGER);

    private final int value;
    private final String description;
    private final String cssTag;

    YesOrNoEnum(int value, String description, String cssTag) {
        this.value = value;
        this.description = description;
        this.cssTag = cssTag;
    }


    @Override
    public Integer getValue() {
        return value;
    }

    @Override
    public String description() {
        return description;
    }


    @Override
    public String cssTag() {
        return cssTag;
    }

}
