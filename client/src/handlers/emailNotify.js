import emailjs from "emailjs-com";
const emailNotify = (
  startdate,
  //   startleavetype,
  //   enddate,
  //   endleavetype,
  noofdays,
  type,
  reason
) => {
  //   let template_params = {
  //     apply_name: "Ravi",
  //     leave_type: type,
  //     startdate: startdate,
  //     startleavetype: startleavetype,
  //     enddate: enddate,
  //     eandleavetype: endleavetype,
  //     noofdays: noofdays,
  //     reason: reason
  //   };
  let template_params = {
    apply_name: "Ravi",
    leave_type: type,
    date: startdate,
    noofdays: noofdays,
    reason: reason
  };

  let service_id = "gmail_ravi_personal";
  let template_id = "template_Pf1VepTN_clone";
  let user_id = "user_06tOgtSi4gf4hxDbPiXwR";

  emailjs.send(service_id, template_id, template_params, user_id).then(
    response => {
      console.log("SUCCESS!", response.status, response.text);
    },
    err => {
      console.log("FAILED...", err);
    }
  );
};

export default emailNotify;
