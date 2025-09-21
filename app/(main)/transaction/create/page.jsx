

import { getUserAccounts } from "@/actions/dashboard";
import { getTransaction } from "@/actions/transactions";
import { AddTransactionForm } from "../_components/transaction-form";
import { defaultCategories } from "@/data/categories";

export default async function AddTransactionPage({ searchParams }) {
  // ✅ Await searchParams (it's a Promise in server components)
  const params = await searchParams;
  const editId = params?.edit;
console.log(editId);
  const accounts = await getUserAccounts();

  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title">Add Transaction</h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
}
