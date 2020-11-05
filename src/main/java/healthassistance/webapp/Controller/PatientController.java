package healthassistance.webapp.Controller;
import healthassistance.webapp.Model.Patient;
import healthassistance.webapp.Repository.PatientRepository;
import healthassistance.webapp.Service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;  //inject repository

    @Autowired
    private RegistrationService registrationService; // inject Registration Service

    //save a new patient
    @PostMapping("/addPatient")
    public String savePatient(@RequestBody Patient patient) throws Exception {
        //check if patient  already present in the database
        String tempNIC = patient.getNic();
        if (tempNIC != null && !"".equals(tempNIC)) {
            Patient patient1 = registrationService.fetchByNIC(tempNIC);
            if (patient1 != null) {
                throw new Exception("Patient with" + tempNIC + "is already exist");
            }
        }
        patientRepository.save(patient);
        return "Add a Patient with id" + patient.getId();
    }

    //Patient login check
    @PostMapping("/patientLogin")
    public Patient patientLogin(@RequestBody Patient patient) throws Exception {
        //check login data
        String tempNic = patient.getNic();
        String tempPassword = patient.getPassword();
        Patient patient1 = null;
        if (tempNic != null && tempPassword != null){
            patient1 = registrationService.fetchByNicANDpassword(tempNic,tempPassword);
        }
        if (patient1 == null){
            throw new Exception("Bad creditional");
        }
        return patient1;
    }




    //get all patients method
    @GetMapping("/findAllPatients")
    public List<Patient> getPatient(){
        return patientRepository.findAll();
    }

    //get patient by id
    @GetMapping("/findPatientByid/{id}")
    public Optional<Patient> getPatient(@PathVariable String id){
        return patientRepository.findById(id);
    }

    //delete patient
    @DeleteMapping("/deletepatient/{id}")
    public String deletePatient(@PathVariable String id){
        patientRepository.deleteById(id);
        return "Patient deleted with id";
    }
}
