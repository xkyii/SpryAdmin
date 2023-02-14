package com.xkyii.spry.admin.dto.error;

import org.eclipse.microprofile.openapi.annotations.media.Schema;

@Schema(description = "参数校验输出")
public class ValidateOutput {

    @Schema(title="字段名")
    private String field;

    @Schema(title="代码")
    private String code;

    @Schema(title="信息")
    private String message;

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
