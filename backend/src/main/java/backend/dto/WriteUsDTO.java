package backend.dto;

import backend.models.WriteUs;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WriteUsDTO {
    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;


}
