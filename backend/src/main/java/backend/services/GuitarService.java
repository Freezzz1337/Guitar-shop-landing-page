package backend.services;

import backend.models.Guitar;
import backend.repository.GuitarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Base64;
import java.util.List;

@Service
@Transactional(readOnly = true)
public class GuitarService {
    private final GuitarRepository guitarRepository;

    @Autowired
    public GuitarService(GuitarRepository guitarRepository) {
        this.guitarRepository = guitarRepository;
    }

    public List<Guitar> getGuitarsByType(String type) {
        return guitarRepository.findGuitarByType(type).stream()
                .peek(a -> a.setImgUrl(convertByteArrayToString(a.getPicture())))
                .toList();
    }

    private String convertByteArrayToString(byte[] item) {
        String base64 = Base64.getEncoder().encodeToString(item);
        return "data:image/jpeg;base64," + base64;
    }


//    ----------------------To add new picture---------------------
//    @Transactional
//    public void savePicture(String picture) {
//
//        List<Guitar> list = guitarRepository.findAll().stream()
//                .sorted(Comparator.comparingInt(Guitar::getId))
//                .toList();
//
//        for (int i = 0; i < list.size(); i++) {
//
//            if (list.get(i).getPicture() == null) {
//                Guitar guit = list.get(i);
//                guit.setPicture(convertToByteArray(picture));
//                guitarRepository.save(guit);
//                return;
//            } else {
//                System.out.println("Hello" + i);
//            }
//        }
//    }
//
//    private byte[] convertToByteArray(String base64) {
//        base64 = base64.replace("data:image/jpeg;base64,", "");
//        return Base64.getDecoder().decode(base64);
//    }
}
