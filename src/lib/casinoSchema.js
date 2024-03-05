import * as Yup from "yup";

export const createCasinoSchema = Yup.object().shape({
  companyName: Yup.string().required("Please input this field"),
  domainName: Yup.string().required("Please input this field"),
  license: Yup.string().required("Please input this field"),
  deals: Yup.string().required("Select deals"),
  amount: Yup.string().required("Please input this field"),
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
