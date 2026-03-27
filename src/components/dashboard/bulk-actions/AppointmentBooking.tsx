import { X } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Minus } from "lucide-react";

const AppointmentBooking = () => {
  type sampleData = {
    patient_name: string;
    doctor_name: string;
    clinic_name: string;
    appointment_date: string;
    appointment_time: string;
    clinic_phone: string;
  };

  const data: sampleData = {
    patient_name: "Pratik",
    doctor_name: "Dr. Sharma",
    clinic_name: "City Clinic",
    appointment_date: "25 Feb",
    appointment_time: "5:00 PM",
    clinic_phone: "9876543210",
  };

  function parseTemplate(template: string, data: sampleData): string {
    return template.replace(/{{(.*?)}}/g, (_, key: string) => {
      const typedKey = key.trim() as keyof sampleData;
      return data[typedKey] ?? "";
    });
  }

  const template = `Hello {{patient_name}},
           your appointment with {{doctor_name}} at {{clinic_name}}
           is confirmed for {{appointment_date}} at {{appointment_time}}.`;

  const result = parseTemplate(template, data);

  return (
    <div className="rounded-xl border-[#AFAFAF] border-[0.4px] bg-[#FFFFFF] py-5 px-6 flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-2 relative w-full">
        <span className="text-[#292929] font-normal text-[18px] leading-[26px]">
          Bulk SMS
        </span>
        <span className="text-[#5C5C5C] font-light text-xs">
          Review the details weather the sending SMS is similar or not as you
          wish.
        </span>
        <X size={20} className="absolute right-0" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="w-full flex flex-col gap-3">
          <span className="text-[#3B3B3B] font-normal text-sm">Category</span>
          <div className="rounded-lg border-[0.5px] border-[#DEDEDE] py-[10px] px-3 shadow-[0px_0px_2px_0px_#FFBDB6] flex gap-[10px] w-full justify-between">
            <span className="text-[#292929] text-base font-light">Offers</span>
            <ChevronDown size={20} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <span className="text-[#3B3B3B] font-normal text-sm">
            Scenario Name
          </span>
          <div className="rounded-lg border-[0.5px] border-[#DEDEDE] py-[10px] px-3 shadow-[0px_0px_2px_0px_#FFBDB6] flex gap-[10px] w-full justify-between">
            <span className="text-[#292929] text-base font-light">
              Appointment Confirmation
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[#3B3B3B] font-normal text-sm">
            Scenario Description
          </span>
          <div className="rounded-lg border-[#DEDEDE] border-[0.5px] py-[10px] px-3 flex gap-[10px]">
            <span className="text-[#5C5C5C] font-light text-base">
              {result}
            </span>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <div className="flex gap-3 justify-end">
            <span className="text-[#5C5C5C] font-light text-sm text-center rounded-full border-[0.6px] border-[#9F9F9F] py-[6px] px-6">
              Edit details
            </span>
            <div className="bg-[#A03879] border-[0.6px] border-[#9F9F9F] py-[6px] px-3 rounded-full flex gap-[10px] items-center">
              <span className="text-[#FFFFFF] font-normal text-sm text-center">
                Send
              </span>
              <Minus className="-rotate-90 border-[1px] border-[#F6EBF2] w-[17px] h-0 bg-[#FFFFFF]" />
              <ChevronDown size={20} className="-rotate-180 text-[#FFFFFF]" />
            </div>
          </div>
          <span className="text-[#AFAFAF] font-light text-[10px] leading-4">
            A confirmation SMS will be sent to the patient after you confirm.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
