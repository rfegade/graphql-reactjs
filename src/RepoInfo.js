import React from "react";

export default function RepoInfo({ repo }) {
  let license;

  switch (repo.licenseInfo?.spdxId) {
    case undefined:
      license = (
        <span
          className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-danger"
          style={{ fontSize: ".6em" }}
        >
          NO LICENSE
        </span>
      );
      break;
    case "NOASSERTION":
      license = (
        <span
          className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-warning"
          style={{ fontSize: ".6em" }}
        >
          {repo.licenseInfo.spdxId}
        </span>
      );
      break;
    default:
      license = (
        <span
          className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-outline-success"
          style={{ fontSize: ".6em" }}
        >
          {repo.licenseInfo.spdxId}
        </span>
      );
  }
  return (
    <li className="list-group-item" key={repo.id.toString()}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <a
            className="h5 mb-0 text-decoration-none text-primary"
            href={repo.url}
            target="_blank"
            rel="noreferrer"
          >
            {repo.name}
          </a>
          {repo.description && <p className="small me-4">{repo.description}</p>}
        </div>
        <div className="text-nowrap ms-3">
          {/* Loop doesn't like to print null value, ?. operator called optional chaining operator */}
          {license}
          <span
            style={{ fontSize: ".6em" }}
            className={
              "px-1 py-1 ms-1 d-inline-block btn btn-sm " +
              (repo.viewerSubscription === "SUBSCRIBED"
                ? "btn-success"
                : "btn-outline-secondary")
            }
          >
            {repo.viewerSubscription}
          </span>
        </div>
      </div>
    </li>
  );
}
