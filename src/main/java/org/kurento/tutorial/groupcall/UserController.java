package org.kurento.tutorial.groupcall;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.google.gson.Gson;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Tran on 15-08-2016.
 */

@Controller
public class UserController {
    @RequestMapping(value="/", method = RequestMethod.GET)
    String index() {
        return "index.html";
    }
    @RequestMapping(value="/test", method = RequestMethod.GET)
    String getIndex1() {
        return "index_1.html";
    }
    @RequestMapping(value="/statics", method = RequestMethod.GET)
    String getStatics() {
        return "index_2.html";
    }
    @RequestMapping(value="/error", method = RequestMethod.GET)
    String errors() {
        return "Error";
    }
}
