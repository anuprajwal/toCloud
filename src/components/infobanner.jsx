import { Users, Calendar } from 'lucide-react';

const InfoBanner = () => {
  return (
    <div className="
      infobanner text-base
        flex flex-wrap justify-center
    ">
      {/* Doctors Joined */}
      <div className="flex items-center gap-2 ">
        <Users className="text-green-400 w-5 h-5" />
        <span className="text-green-300 font-semibold">200+ Doctors</span>
        <span className="text-white/80 font-semibold ">Partnered</span>
      </div>

      {/* Divider */}
      <div className="h-5 w-px bg-white/30 dark:bg-white/20" />

      {/* Launch Info */}
      <div className="flex items-center gap-2">
        <Calendar className="text-yellow-400 w-5 h-5" />
        <span className="text-yellow-400 font-semibold">Launching in 2 Months</span>
      </div>
    </div>
  );
};

export default InfoBanner;
