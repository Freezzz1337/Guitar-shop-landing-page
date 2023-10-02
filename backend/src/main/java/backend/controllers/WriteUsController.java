package backend.controllers;


import backend.dto.WriteUsDTO;
import backend.models.WriteUs;
import backend.services.WriteUsService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/writeUs")
public class WriteUsController {

    private final ModelMapper modelMapper;
    private final WriteUsService writeUsService;

    @Autowired
    public WriteUsController(ModelMapper modelMapper, WriteUsService writeUsService) {
        this.modelMapper = modelMapper;
        this.writeUsService = writeUsService;
    }


    @PostMapping
    public ResponseEntity<String> saveWriteUs(WriteUsDTO writeUsDTO){
        writeUsService.save(convertToWriteUs(writeUsDTO));
        return ResponseEntity.ok("OK!");
    }


    private WriteUs convertToWriteUs(WriteUsDTO writeUsDTO) {
        return modelMapper.map(writeUsDTO, WriteUs.class);
    }

}
