package healthassistance.webapp.Controller;

import healthassistance.webapp.Model.Doctor;
import healthassistance.webapp.Repository.DoctorRepository;
import healthassistance.webapp.Service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
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
