package backend.controllers;

import backend.models.Guitar;
import backend.services.GuitarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/guitar")
public class GuitarController {
    private final GuitarService guitarService;

    @Autowired
    public GuitarController(GuitarService guitarService) {
        this.guitarService = guitarService;
    }

    @GetMapping("/popular")
    public ResponseEntity<List<Guitar>> getPopular(){
        return ResponseEntity.ok(guitarService.getGuitarsByType("popular"));
    }

    @GetMapping("/acoustic")
    public ResponseEntity<List<Guitar>> getAcoustic(){
        return ResponseEntity.ok(guitarService.getGuitarsByType("acoustic"));
    }

    @GetMapping("/electric")
    public ResponseEntity<List<Guitar>> getElectric(){
        return ResponseEntity.ok(guitarService.getGuitarsByType("electric"));
    }

    @GetMapping("/bas")
    public ResponseEntity<List<Guitar>> getBas(){
        return ResponseEntity.ok(guitarService.getGuitarsByType("bas"));
    }


//    ----------------------To add new picture---------------------
//    @PostMapping("/addPicture")
//    public void add(GuitarDTO g) {
//        guitarService.savePicture(g.getPicture());
//    }

}
