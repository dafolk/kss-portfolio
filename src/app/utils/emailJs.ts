import emailjs from "@emailjs/browser";

type TemplateParamsType = {
  mailTo: string;
  subscriberName: string;
  subscriberNote: string;
};

export function sendEmail(
  templateParams: TemplateParamsType,
  errorCallback: void
) {
  emailjs
    .send("service_vhs4osa", "template_quyzx95", templateParams, {
      publicKey: "4x5c2pAyJP8_YFOWR",
    })
    .then((result) => {
      console.log(result);
    })
    .catch(() => errorCallback);
}
