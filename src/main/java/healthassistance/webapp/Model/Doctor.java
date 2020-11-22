package healthassistance.webapp.Model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;

@Getter
@Setter
@ToString

@Document(collection = "doctors")
public class Doctor {
    @Id
    @GeneratedValue
    private String id;
    private String firstname;
    private String lastname;
    private String nic;
    private String location;
    private String password;
}
