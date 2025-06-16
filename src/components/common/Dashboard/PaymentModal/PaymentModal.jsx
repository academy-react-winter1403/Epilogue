import React from "react";
import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD
=======
import { useMutation } from "@tanstack/react-query";
import { addCoursePayment } from "../../../../core/services/api/Dashboard/dashborad";
import { useTranslation } from "react-i18next";
import generateInvoiceNumber from "../../../../core/utils/PaymentInvoiceNumber";
import toast from "react-hot-toast";
>>>>>>> d5c08654a79ea7d73f51850d86ddeb830faae053

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: "-30%", opacity: 0, scale: 0.95 },
  visible: { y: "0%", opacity: 1, scale: 1 },
  exit: { y: "-20%", opacity: 0, scale: 0.95 },
};

const PaymentModal = ({ isOpen, onClose, course }) => {
    const { t } = useTranslation('dashboard'); 
  
  const generatedInvoiceNumber = generateInvoiceNumber();
  const handlePayment = async () => {
    const coursePayment = new FormData();
    const now = new Date()
    now.setMonth(now.getMonth()-1)
  
    coursePayment.append("CourseId", course?.courseId);
    coursePayment.append("StudentId", course?.studentId);
    coursePayment.append("Paid", course?.cost);
    coursePayment.append("PeymentDate",now.toISOString());
    coursePayment.append("PaymentInvoiceNumber", generatedInvoiceNumber);
    mutation.mutate(coursePayment);
  };

  const mutation = useMutation({
    mutationFn: (data) => {
      const res = addCoursePayment(data);
      return res;
    },
    onSuccess: () => {
      toast.success(t("profileEditSuccess"));
    },
    onError: () => {
      toast.error(t("profileEditError"));
    },
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <h2 className="text-lg font-yekan-700 mb-4">پرداخت شهریه</h2>
            <p className="mb-2 text-sm">
              نام دوره:{" "}
              <span className="font-yekan-600">{course?.termName}</span>
            </p>
            <p className="mb-6 text-sm">
              مبلغ قابل پرداخت:{" "}
              <span className="font-yekan-600">
                {course?.cost?.toLocaleString()} تومان
              </span>
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 cursor-pointer rounded-xl px-4 py-2 text-sm"
                onClick={onClose}
              >
                بستن
              </button>
<<<<<<< HEAD
              <button className="bg-blue-500  cursor-pointer text-white rounded-xl px-4 py-2 text-sm">
=======
              <button
                className="bg-blue-500  cursor-pointer text-white rounded-xl px-4 py-2 text-sm"
                onClick={handlePayment}
              >
>>>>>>> d5c08654a79ea7d73f51850d86ddeb830faae053
                پرداخت
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
