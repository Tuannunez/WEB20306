export default function Button({ label = "Default Lable", variant = "primary" }) {
    const baseClasses = "py-2 px-4 rounded-full font-semibold transition duration-300 text-sm";
    
    const primaryClasses = "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg";
    
    const secondaryClasses = "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50";

    const finalClasses = variant === 'primary' 
        ? `${baseClasses} ${primaryClasses}`
        : `${baseClasses} ${secondaryClasses}`;

    return (
        <button className={finalClasses}>
            {label}
        </button>
    );
}