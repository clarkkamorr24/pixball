export type Projects = {
  project_name: string;
  project_lead: string;
  progress: number;
  assignee: string;
  status: "Inprogress" | "Pending" | "Completed";
  due_date: string;
};

export type Products = {
  product_name: string;
  price: number;
  orders: number;
  stock: string;
  amount: number;
  date: string;
};

const mockProjectData = (): Projects[] => {
  return [
    {
      project_name: "Batman",
      project_lead: "Liam Risher",
      progress: 53,
      assignee: "Assignee",
      status: "Inprogress",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Bender Project",
      project_lead: "Oliver Noah",
      progress: 30,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Bigfish",
      project_lead: "Donald Benjamin",
      progress: 30,
      assignee: "Assignee",
      status: "Inprogress",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Canary",
      project_lead: "Elijah James",
      progress: 40,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Casanova",
      project_lead: "William Risher",
      progress: 53,
      assignee: "Assignee",
      status: "Completed",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Batman",
      project_lead: "Liam",
      progress: 53,
      assignee: "Assignee",
      status: "Inprogress",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Batman",
      project_lead: "Liam",
      progress: 53,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Batman",
      project_lead: "Liam",
      progress: 53,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Batman",
      project_lead: "Liam",
      progress: 53,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Batman",
      project_lead: "Liam",
      progress: 53,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Batman",
      project_lead: "Liam",
      progress: 53,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Batman",
      project_lead: "Liam",
      progress: 53,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Batman",
      project_lead: "Liam",
      progress: 53,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Batman",
      project_lead: "Liam",
      progress: 53,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Batman",
      project_lead: "Liam",
      progress: 53,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
    {
      project_name: "Batman",
      project_lead: "Liam",
      progress: 53,
      assignee: "Assignee",
      status: "Pending",
      due_date: "06 Sep 21",
    },
  ];
};

const mockProductData = (): Products[] => {
  return [
    {
      product_name: "Air Conditioner",
      price: 83.2,
      orders: 53,
      stock: "In Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Bender Project",
      price: 86.2,
      orders: 53,
      stock: "Out of Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Bigfish",
      price: 85.2,
      orders: 53,
      stock: "In Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Canary",
      price: 85.2,
      orders: 53,
      stock: "In Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Casanova",
      price: 85.2,
      orders: 53,
      stock: "Out of Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Batman",
      price: 53,
      orders: 53,
      stock: "Out of Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Batman",
      price: 53,
      orders: 53,
      stock: "In Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Batman",

      price: 53,
      orders: 53,
      stock: "In Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Batman",
      price: 53,
      orders: 53,
      stock: "In Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Batman",
      price: 53,
      orders: 53,
      stock: "In Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Batman",
      price: 53,
      orders: 53,
      stock: "Out of Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Batman",
      price: 53,
      orders: 53,
      stock: "Out of Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Batman",
      price: 53,
      orders: 53,
      stock: "Out of Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Batman",
      price: 53,
      orders: 53,
      stock: "Out of Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Batman",
      price: 53,
      orders: 53,
      stock: "Out of Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
    {
      product_name: "Batman",
      price: 53,
      orders: 53,
      stock: "Out of Stock",
      amount: 1200.75,
      date: "24 April 2023",
    },
  ];
};

export { mockProjectData, mockProductData };
