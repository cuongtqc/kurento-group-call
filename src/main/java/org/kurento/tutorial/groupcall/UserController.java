package org.kurento.tutorial.groupcall;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.concurrent.ConcurrentMap;

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
    String index1() {
        return "index_1.html";
    }
    @RequestMapping(value="/statics", method = RequestMethod.GET)
    String statics() {
        return "index_2.html";
    }
    @RequestMapping(value="/info", method = RequestMethod.GET)
    @ResponseBody ConcurrentMap<String, Room> getAllStatics(){
        return RoomManager.getRooms();
    }
    @RequestMapping(value="/error", method = RequestMethod.GET)
    String errors() {
        return "Error";
    }
}
