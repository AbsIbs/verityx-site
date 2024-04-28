// Icons
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <section className="bg-surface py-24 flex items-center justify-center">
      <div className="w-[1280px] flex flex-row px-6 justify-between">
        {/* Contact info */}
        <div className="flex flex-col gap-4">
          <p className="text-on-bg text-2xl">Contact Information</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <AlternateEmailIcon className="text-primary" />
              <p className="text-secondary-text-on-bg">companyName@mail.com</p>
            </div>
            <div className="flex flex-row gap-2">
              <CallIcon className="text-primary" />
              <p className="text-secondary-text-on-bg">07123 123 123</p>
            </div>
          </div>
        </div>
        {/* Latest projects */}
        <div className="flex flex-col gap-4">
          <p className="text-on-bg text-2xl">Latest projects</p>
          <div className="flex flex-col gap-2">
            <p className="text-secondary-text-on-bg">Pulse Poetry</p>
            <p className="text-secondary-text-on-bg">TDM</p>
            <p className="text-secondary-text-on-bg">Dishdelve</p>
          </div>
        </div>
        {/* Follow us on */}
        {/* Latest projects */}
        <div className="flex flex-col gap-4">
          <p className="text-on-bg text-2xl">Follow us on</p>
          <div className="flex flex-col gap-2">
            <p className="text-secondary-text-on-bg">LinkedIn</p>
            <p className="text-secondary-text-on-bg">Instagram</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer