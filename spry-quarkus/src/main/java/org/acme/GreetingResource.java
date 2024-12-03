package org.acme;

import io.vertx.core.json.JsonObject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/hello")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from Quarkus REST";
    }

    @GET
    @Path("getResponse")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getResponse() {
        return Response.ok(JsonObject.of(
                "data", Response.class.getName()
            ).getMap())
            .type(MediaType.APPLICATION_JSON)
            .build();
    }

}
