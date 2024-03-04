import * as Yup from "yup";

export const createCasinoSchema = Yup.object().shape({
  companyName: Yup.string().required("Required"),
  domainName: Yup.string().required("Required"),
  license: Yup.string().required("Required"),
  deals: Yup.string().required("Select deals"),
  amount: Yup.string().required("Required"),
  language: Yup.string().required("Select language"),
  geo: Yup.array()
    .of(Yup.string())
    .min(1, "Select Country")
    .required("Select Country"),
  listOfIPs: Yup.string().required("Add IP(s)"),
  products: Yup.array()
    .of(Yup.string())
    .min(1, "Select Products")
    .required("Select Products"),
});
