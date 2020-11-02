package healthassistance.webapp.Model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString

@Document(collection = "patients")
public class Patient {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String NIC;
    private String location;

}
