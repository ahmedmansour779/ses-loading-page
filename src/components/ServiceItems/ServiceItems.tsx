import { serviceData } from "../../data/serviceData";
import { Lines } from "../../Icons/icons";
import "../../style/serviceAnimation.css";

export default function ServiceItems() {
  return (
    <div className="bg-background text-white font-primary absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto py-20">
        <div className="w-full flex flex-col gap-2 items-center mb-8 show-title-service">
          <div className="flex items-center gap-2">
            <Lines />
            <p className="font-medium">Services</p>
          </div>
          <div className="flex flex-col items-center text-2xl font-semibold">
            <p>Efficient, Productive,</p>
            <p>and Profitable.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 gap-y-10 justify-around font-primary">
          {
            serviceData.map(({ title, description, icon }, index) => {
              return (
                <div key={title} className={`flex flex-col gap-2 items-center w-80 text-center ${"item-" + ++index}`}>
                  <div className="w-fit" dangerouslySetInnerHTML={{ __html: icon }} />
                  <p className="text-blue font-bold">
                    {title}
                  </p>
                  <p className="text-sm font-medium leading-5">
                    {description}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
