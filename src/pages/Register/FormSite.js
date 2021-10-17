import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { dayWeeks, nightWeeks } from "../../utils/schedules"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
              <h1 className="bg-pink-900 pl-6 pt-12 pb-2 rounded-tl-lg rounded-tr-lg text-4xl xl:text-5xl font-semibold text-gray-50">Class Details and Registration</h1>
              <p className="px-6 pt-4 bg-gray-50 text-xl text-pink-900 ">
                In addition to receiving in depth and expert full stack web
                development training, you will have the opportunity to join our
                Graduate Development Team and build professional work experience
                by engaging with real clients from our local communities.
              </p>
              <p className="px-6 pt-10  bg-gray-50 text-xl text-pink-900 ">
                Classes start on Dec 1st, register now to reserve your seat and
                jumpstart your new development career! Jump in our{" "}
                <a href="https://us02web.zoom.us/j/89810725704" className="underline">
                  Virtual Meet and Greet Zoom,
                </a>{" "}
                Mon-Fri from 1-3pm, before registering for a discount to the program!
              </p>

              <div className="bg-gray-50 pl-6 text-3xl  pt-16 font-semibold text-pink-900">
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
                          : "See the Day Schedule"}
                      </span>
                    </Switch.Label>
                  </Switch.Group>
                </span>
                <div className="px-6 p-14 bg-gray-50 justify-items-end grid grid-cols-2">
                  <ul className="text-black font-normal text-lg">
                    <li>
                      {" "}
                      {toggle
                        ? "9 Week, 240 Hour Program"
                        : "16 Week 240 Hour Program"}{" "}
                    </li>
                    <li>Internship Opportunities </li>
                    <li>Career Coaching </li>
                    <li> Placement Assistance </li>
                  </ul>
                  <div className="px-4 lg:pt-10 flex-col lg:flex-row justify-self-start  text-black font-normal text-lg">
                    Total of $4000{" "}
                    <span className="text-sm text-pink-900 ml-2">
                      (Launch Discounts Available)
                    </span>
                  </div>
                </div>
                <p className="text-black font-normal text-lg pb-8">
                  {" "}
                  {toggle
                    ? "Our Day sessions will be Monday - Friday, from 9AM to 3PM, with an hour lunch in the middle of the session. Our instructors will have office hours every day for an hour after the class ends, and upon request."
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
