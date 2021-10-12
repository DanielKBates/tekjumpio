import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const dayWeeks = [
  { week: "Week One", unit: "Basics of Web Development - HTML, CSS and Git" },
  {
    week: "Week Two",
    unit: "Animation and CSS Libraries, Developing Interactive Sites - JavaScript, Bootstrap",
  },
  { week: "Week Three", unit: "Advanced JavaScript and Object Oriented Development - JavaScript" },
  {
    week: "Week Four",
    unit: "Making HTTP requests with JavaScript, Utilizing Externl APIs in Web Development - JavaScript",
  },
  {
    week: "Week Five",
    unit: "Developing Persistent Websites - Google Firebase, Node.js",
  },
  { week: "Week Six", unit: "Server and API Endpoint Creation - Express.js" },
  { week: "Week Seven", unit: "Non-Relational Database - MongoDB" },
  { week: "Week Eight", unit: "JavaScript Frameworks - React Basics" },
  {
    week: "Week Nine",
    unit: "Advanced React Hooks and State Management with Redux",
  },
];

const nightWeeks = [
  { week: "Week One", unit: "Basics of Web Development - HTML, CSS and Git" },
  {
    week: "Week Two",
    unit: "Animation and CSS Libraries, Developing Interactive Sites - JavaScript, Bootstrap",
  },
  { week: "Week Three", unit: "Advanced JavaScript and " },
  {
    week: "Week Four",
    unit: "Making HTTP requests with JavaScript, Utilizing Externl APIs in Web Development - JavaScript",
  },
  {
    week: "Week Five",
    unit: "Developing Persistent Websites - Google Firebase, Node.js",
  },
  { week: "Week Six", unit: "Server and API Endpoint Creation - Express.js" },
  { week: "Week Seven", unit: "Non-Relational Database - MongoDB" },
  { week: "Week Eight", unit: "JavaScript Frameworks - React Basics" },
  {
    week: "Week Nine",
    unit: "Advanced React Hooks and State Management with Redux",
  },
  {
    week: "Week Ten",
    unit: "Advanced React Hooks and State Management with Redux",
  },
  {
    week: "Week Eleven",
    unit: "Advanced React Hooks and State Management with Redux",
  },
  {
    week: "Week Twelve",
    unit: "Advanced React Hooks and State Management with Redux",
  },
  {
    week: "Week Thirteen",
    unit: "Advanced React Hooks and State Management with Redux",
  },
  {
    week: "Week Fourteen",
    unit: "Advanced React Hooks and State Management with Redux",
  },
  {
    week: "Week Fifteen",
    unit: "Advanced React Hooks and State Management with Redux",
  },
];

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
          <div className="pt-2 text-lg align-middle inline-block sm:px-6 lg:px-10">
            <div className="shadow overflow-hidden border-b border-gray-200">
              <p className="px-6 pt-10 bg-gray-50 text-2xl lg:text-xl text-pink-900 ">
                In addition to receiving in depth and expert full stack web
                development training, you will have the opportunity to join our
                Graduate Development Team and build professional work experience
                by engaging with real clients from our local communities.
              </p>
              <p className="px-6 pt-14  bg-gray-50 text-2xl lg:text-xl text-pink-900 ">
                Classes start on Dec 1st, register now to reserve your seat and
                jumpstart your new development career! Jump in our <a href ="#" className="underline">Virtual Meet and Greet Zoom,</a> anytime before registering for a discount to the program!
              </p>
              <div className="px-6 p-14 bg-gray-50 justify-items-end grid grid-cols-2">
                <ul>
                  <li>
                    {" "}
                    {toggle
                      ? "9 Week, 225 Hour Program"
                      : "15 Week 225 Hour Program"}{" "}
                  </li>
                  <li>Internship Opportunities </li>
                  <li>Career Coaching </li>
                  <li> Placement Assistance </li>
                </ul>
                <div className="p-4 ml-24 flex justify-self-start items-center">
                  Total of $4000 <span className="text-sm text-pink-900 ml-2">(Launch Discounts Available)</span>
                  
                </div>
              </div>
              <div>
                <h1 className="bg-gray-50  pl-6 text-3xl font-bold text-pink-900">
                  Class Schedule <p className="text-black font-normal text-lg"> {toggle? "DAY SCHEDULE DETAILS DAY2DAY" : "Night SCHEDULE DETAILS DAY2DAY" } </p>
                  <span>
                    {" "}
                    <Switch.Group as="div" className="flex items-center">
                      <Switch
                        checked={toggle}
                        onChange={setToggle}
                        className={classNames(
                          toggle ? "bg-pink-900" : "bg-gray-200",
                          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                </h1>
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
