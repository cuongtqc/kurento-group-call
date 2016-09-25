package org.kurento.tutorial.groupcall;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * Created/Modified by Tran on 25-08-2016.
 */
@RestController
public class UserRestController {
    @RequestMapping(value="/info", method = RequestMethod.GET)
    @ResponseBody
    String getInfo() {
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String json = null;
        try {
            json = ow.writeValueAsString(RoomManager.rooms);
        } catch (JsonProcessingException e) {
            System.out.print("=========================================(v.v)==================================");
            e.printStackTrace();
        }
        return json;
    }
}
