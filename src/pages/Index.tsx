const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Apple-style segmented loading spinner */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto">
            <svg className="animate-spin w-16 h-16" viewBox="0 0 50 50">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#d1d5db"
                strokeWidth="4"
                strokeDasharray="8 4"
                strokeLinecap="round"
              />
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#374151"
                strokeWidth="4"
                strokeDasharray="31.416 31.416"
                strokeDashoffset="31.416"
                strokeLinecap="round"
                className="animate-pulse"
                style={{
                  animation: "dash 2s ease-in-out infinite",
                }}
              />
            </svg>
          </div>
        </div>

        <style>
          {`
            @keyframes dash {
              0% {
                stroke-dasharray: 1 31.416;
                stroke-dashoffset: 0;
              }
              50% {
                stroke-dasharray: 15.708 15.708;
                stroke-dashoffset: -7.854;
              }
              100% {
                stroke-dasharray: 1 31.416;
                stroke-dashoffset: -31.416;
              }
            }
          `}
        </style>

        {/* Loading text */}
        <p className="text-xl text-gray-600 font-medium">
          Just a few more minutes...
        </p>
      </div>
    </div>
  );
};

export default Index;
