import { Check, X, AlertCircle } from "lucide-react";

export type StatusType = 'ACTIVE' | 'PAUSED' | 'PENDING' | 'REJECTED' | 'TERMINATED';

export default function StatusBadge({ status }: { status: StatusType }) {
  const styles = {
    ACTIVE: "bg-success-50 text-success-600 border-success-200",
    PAUSED: "bg-yellow-50 text-yellow-600 border-yellow-200",
    PENDING: "bg-blue-50 text-blue-600 border-blue-200",
    REJECTED: "bg-red-50 text-red-600 border-red-200",
    TERMINATED: "bg-gray-50 text-gray-600 border-gray-200",
  };

  const icons = {
    ACTIVE: <Check className="w-3 h-3 mr-1" />,
    PAUSED: <AlertCircle className="w-3 h-3 mr-1" />,
    PENDING: <ClockIcon className="w-3 h-3 mr-1" />,
    REJECTED: <X className="w-3 h-3 mr-1" />,
    TERMINATED: <X className="w-3 h-3 mr-1" />,
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
      {icons[status]}
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </span>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
