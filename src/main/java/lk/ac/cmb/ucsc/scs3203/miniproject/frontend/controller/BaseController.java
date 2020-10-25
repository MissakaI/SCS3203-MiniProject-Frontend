package lk.ac.cmb.ucsc.scs3203.miniproject.frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class BaseController {

    @GetMapping(value = {"","Classes"})
    public String classes(){
        return "Classes";
    }

    @GetMapping("Teachers")
    public String teachers(){
        return "Teachers";
    }

    @GetMapping("Students")
    public String students(){
        return "Students";
    }

    @GetMapping("Courses")
    public String courses(){
        return "Courses";
    }
}
