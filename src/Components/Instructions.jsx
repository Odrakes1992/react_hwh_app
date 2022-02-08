import React from "react";
import { MdSwipe } from "react-icons/md";
import { Link } from "react-router-dom";

function Instructions() {
  return (
    <div>
      <h1>
        {" "}
        Hinge Will Happen <MdSwipe />
        <br /> <br /> Instructions{" "}
      </h1>
      <hr className="my-4" />

      <ol>
        <li>
          Once you are in the Hinge app, navigate your way to Account settings
          and Download My Data.
        </li>
        <li>
          Request that bad - boy and you will receive an email letting you know
          it is on its way.
        </li>
        <li>
          This can take a while to come through, so a bit patience young one.
        </li>
        <li>
          When you have receive the data, download and unzip that file, I think
          you can do this on your phone
        </li>
        <li>
          The file we care about here is the <strong>matches.json</strong> file,
          once we have that we are good to go.
        </li>
        <li>
          We love a bit of GDPR here so your data is never stored anywhere, it
          all happens in the browser. We don't even store it in any
          sessions/cache, because we care.
        </li>
      </ol>

      <p>
        <br />
        Oh and sometimes Chrome is a bit temperamental so give it a go in
        Safari. <br />
        <Link to={{ pathname: "/" }}>Back to the home page.</Link>
      </p>
    </div>
  );
}

export default Instructions;
