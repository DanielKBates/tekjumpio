import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { dayWeeks, nightWeeks } from "../../utils/schedules";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const registerDetails = [
  { id: 1, text: "lorem lorem lorem yyy" },
  { id: 2, text: "lorem lorem lorem" },
  { id: 3, text: "lorem lorem lorem" },
  { id: 4, text: "lorem lorem lorem" },
];

const FormSite = () => {
  const [toggle, setToggle] = useState(true);
  const embedForm = () => {
    window.EmbedManager.embed({
      key: "https://fs26.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTASBU8K-Mte1yJ-zpXHYORbFzpUCZwnDno&1948865317",
      width: "100%",
      mobileResponsive: true,
    });
  };
  useEffect(() => {
    embedForm();
    return () => window.removeEventListener("message", embedForm);
  }, []);

  return (
    <div className="pt-20 mx-auto w-full lg:w-2/3">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="pt-2 text-lg align-middle inline-block px-2 md:px-8 lg:px-10">
            <div className="shadow overflow-hidden border-b border-gray-200">
              <div className="flex-col space-y-4 lg:flex-row  bg-pink-900 px-6 pt-12 pb-2 rounded-tl-lg rounded-tr-lg ">
                <span className="text-4xl xl:text-5xl font-semibold text-gray-50">
                  Class Details and Registration
                </span>
                <span className="inline-block bg-yellow-300 h-full rounded-lg text-xl py-2 px-4 lg:ml-12 ">
                  Launch Discount Available Until Nov 17th!
                </span>
              </div>
              <p className="px-6 pt-10  font-semibold bg-gray-50 text-2xl text-pink-900 ">
                Classes start on Dec 1st, register now to reserve your seat and
                jumpstart your new career!
              </p>
              <ul className="text-xl space-y-6 lg:space-y-2 font-semibold text-pink-900 pt-8 px-6 list-inside list-disc bg-gray-50">
                <li>
                  Receive expert training in the latest and most in demand
                  skills.
                </li>
                <li>
                  If you are not completely satisfied within the first week of classes, get 100% of your money back.
                </li>
                <li>
                  After graduating, join our Graduate Dev Team to gain
                  professional work experience building sites for real
                  clients.
                </li>
                <li>
                  Join our community for career coaching, interview preparation,
                  and placement assistance.
                </li>
                <li>
                  {" "}
                  Jump in our{" "}
                  <a
                    href="https://us02web.zoom.us/j/89810725704"
                    className="underline"
                  >
                    Virtual Meet and Greet Zoom
                  </a>{" "}
                  , Mon-Fri 1-3pm, or our{" "}
                  <a href="https://discord.gg/cfQJR85KTG" className="underline">
                    Q&A Discord Server
                  </a>{" "}
                  to talk to our team.
                </li>
              </ul>

              <div className="bg-gray-50 px-4 text-3xl  pt-8 font-semibold text-pink-900">
                Class Schedule{" "}
                <span className="text-lg ml-2">
                  {toggle ? "(Day)" : "(Night)"}
                </span>
                <span>
                  {" "}
                  <Switch.Group as="div" className="flex items-center">
                    <Switch
                      checked={toggle}
                      onChange={setToggle}
                      className={classNames(
                        toggle ? "bg-pink-900" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-900"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          toggle ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                    <Switch.Label as="span" className="ml-3">
                      <span className="text-sm font-medium text-gray-900">
                        {toggle
                          ? "See the Night Class Schedule"
                          : "See the Day Class Schedule"}
                      </span>
                    </Switch.Label>
                  </Switch.Group>
                </span>
                <div className="grid grid-cols-6  py-14 bg-gray-50 ">
                  <ul className="col-span-2 text-black list-inside list-disc space-y-2 font-normal text-lg">
                    <li>
                      {" "}
                      {toggle
                        ? "9 Week, 240 Hour Program"
                        : "16 Week 240 Hour Program"}{" "}
                    </li>
                    <li>Invitation to join Graduate Dev Team </li>
                    <li>Career Coaching </li>
                    <li> Placement Assistance </li>
                  </ul>
                  <span className="text-3xl xl:text-4xl self-center justify-self-center text-pink-900 "> =</span>{" "}
                  <div className="col-span-3 self-center flex-col lg:flex-row text-black font-normal text-lg">
                    
                    Total of
                    <span className="line-through"> $4000 </span>
                    <span className="text-pink-900 ml-2">
                      ($3000 til November 17th!)
                    </span>
                  </div>
                </div>
                <p className="text-black font-normal text-lg pb-8 w-11/12 lg:w-2/3">
                  {" "}
                  {toggle
                    ? "Our day sessions will be Monday - Friday, from 9AM to 3PM, with an hour lunch in the middle of the session. Our instructors will have office hours every day for an hour after the class ends, and upon request."
                    : "Our night sessions will be Monday - Friday, from 6PM to 9PM. Our instructors will have office hours every day for an hour before the class starts, and upon request."}{" "}
                </p>
              </div>

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Week
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Unit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {toggle
                    ? dayWeeks.map((week, weekIndx) => (
                        <tr
                          key={week.week}
                          className={
                            weekIndx % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {week.week}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {week.unit}
                          </td>
                        </tr>
                      ))
                    : nightWeeks.map((week, weekIndx) => (
                        <tr
                          key={week.week}
                          className={
                            weekIndx % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {week.week}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {week.unit}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <a name="form1948865317" id="formAnchor1948865317"></a>{" "}
    </div>
  );
};

export default FormSite;
