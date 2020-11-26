package healthassistance.webapp.Controller;
import healthassistance.webapp.Model.Doctor;
import healthassistance.webapp.Repository.DoctorRepository;
import healthassistance.webapp.Service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private RegistrationService registrationService;

    //save a new doctor
    @PostMapping("/addDoctor")
    public String saveDoctor(@RequestBody Doctor doctor) throws Exception{
        //check if doctor  already present in the database
        String tempNIC = doctor.getNic();
        if (tempNIC != null && !"".equals(tempNIC) ){
           Doctor doctor1= registrationService.fetchByNic(tempNIC);
           if (doctor1 != null){
               throw new Exception("Doctor with"+tempNIC+"is already exist");
           }
        }
        doctorRepository.save(doctor);
        return "Doctor details saved, id is :"+doctor.getId();
    }

    //login doctor to system
    @PostMapping("/doctorLogin")
    public Doctor loginDoctor(@RequestBody Doctor doctor) throws Exception {
        String tempNIC = doctor.getNic();
        String tempPassword = doctor.getPassword();
        Doctor doctor1 = null;
        if (tempNIC != null && tempPassword != null){
            doctor1 = registrationService.fetchByNicAndPassword(tempNIC,tempPassword);
        }
        if (doctor1 == null){
            throw new Exception("Bad credentials");
        }
        return doctor1;
    }






    //get all doctors
    @GetMapping("/getAllDoctors")
    public List<Doctor> getDoctors(){
         return doctorRepository.findAll();
    }

    //get doctor by id
    @GetMapping("/getDoctorByid/{id}")
    public Optional<Doctor> getDoctors(@PathVariable String id){
        return doctorRepository.findById(id);
    }

    //delete doc by id
    @DeleteMapping("/deletedoctor/{id}")
    public String deleteDoctor(@PathVariable String id){
        doctorRepository.deleteById(id);
        return "Doctor details deleted";
    }
}
