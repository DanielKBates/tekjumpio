import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { dayWeeks, nightWeeks } from "../../utils/schedules";
import { registerInfo } from "../../utils/registerInfo";

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
    <div className="pt-24 mx-auto w-full lg:w-2/3">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="pt-2 text-lg align-middle inline-block px-2 md:px-8 lg:px-10">
            <div className="shadow overflow-hidden border-b border-gray-200">
              <div className="flex-col space-y-4 lg:flex-row  bg-indigo-900 px-6 pt-12 pb-2 rounded-tl-lg rounded-tr-lg ">
                <span className="text-4xl xl:text-5xl font-semibold text-gray-50">
                  Class Details and Registration
                </span>
              </div>
              <div className=" bg-gray-50 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                {registerInfo.map((element) => (
                  <div
                    key={element.title}
                    className={classNames("relative group bg-gray-50 p-6 ")}
                  >
                    <div className="mt-4">
                      <h3 className="text-2xl text-indigo-500 font-medium">
                        <div>{element.title}</div>
                      </h3>
                      <ul className="list-outside list-disc space-y-2 text-gray-600">
                        {element.points.map((point, textIndx) => (
                          <li key={point.id}>{point.text}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
                <div className="relative group bg-gray-50 p-6 ">
                  <div className="mt-4">
                    <h3 className="text-2xl text-indigo-500 font-medium">
                      <div>Talk To Us</div>
                    </h3>
                    <ul className="list-outside list-disc space-y-2 text-gray-600">
                      <li>
                        Jump in our{" "}
                        <a
                          className="text-indigo-400"
                          href="https://us02web.zoom.us/j/89810725704"
                        >
                          Meet and Greet Zoom
                        </a>
                        , M-F, 1-3pm EST
                      </li>
                      <li>
                        Chat with us anytime on our{" "}
                        <a
                          className="text-indigo-400"
                          href="https://discord.gg/cfQJR85KTG"
                        >
                          Q&A Discord Server
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        Check out our
                        <Link className="text-indigo-400" to="/contact">
                          {" "}
                          Contact page{" "}
                        </Link>
                        to talk to us!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 bg-gray-50 font-normal text-lg p-4 ">
                Our <span className="text-indigo-500 font-bold">225 hour training program </span>is $1,000, due 48 hours
                within registering for the program. Upon completing our training
                program, you will be invited to join our <span className="font-bold text-indigo-500">Graduate Career Path,</span>
                in which you will <span className="font-bold text-indigo-500"> receive continued education, interview
                preparation, resume building, career coaching,</span> and the
                opportunity to <span className="font-bold text-indigo-500"> work alongside our dev team to build live,
                professional sites. </span>
              </p>
              <p className="text-gray-600 bg-gray-50 font-normal text-lg p-4 ">
                We know <span className="font-bold text-indigo-500">life gets busy </span> and that the job hunt can be daunting. We
                want to work with you - if you join our <span className="font-bold text-indigo-500"> Graduate Career Path, </span> we
                will <span className="font-bold text-indigo-500">work with your schedule </span> so that you are able to enage in interview preparation sessions, receive  contribute
                to ongoing development projects and <span className="font-bold text-indigo-500"> build experience at your own
                pace.</span> Our Graduate Career Path is $2,500, but you <span className="font-bold text-indigo-500">pay nothing until you start your first job in your new career!</span><span className="text-sm align-top">*</span>
              </p>

              <div className="bg-gray-50 px-4 text-3xl  pt-8 font-semibold text-indigo-600">
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
                        toggle ? "bg-indigo-700" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900"
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
                      <span className="text-sm font-medium text-gray-600">
                        {toggle
                          ? "See the Night Class Schedule"
                          : "See the Day Class Schedule"}
                      </span>
                    </Switch.Label>
                  </Switch.Group>
                </span>
                <p className="text-gray-600 font-normal text-lg pb-8 w-11/12 lg:w-2/3">
                  {" "}
                  {toggle
                    ? "Our day sessions will be Monday - Friday, from 9am to 3pm EST, with an hour lunch in the middle of the session. Our instructors will have office hours every day for an hour after the class ends, and upon request."
                    : "Our night sessions will be Monday - Friday, from 6pm to 9pm EST. Our instructors will have office hours every day for an hour before the class starts, and upon request."}{" "}
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
