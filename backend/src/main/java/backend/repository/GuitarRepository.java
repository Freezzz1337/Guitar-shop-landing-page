package backend.repository;

import backend.models.Guitar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GuitarRepository extends JpaRepository<Guitar, Integer> {

//    ----------------------To add new picture---------------------
//    public List<Guitar> findAll();

    public List<Guitar> findGuitarByType(String type);
}
