import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RubricTitle from "../molecules/RubricTitle";
import { getGuidesDataFromAPI } from "../store/actions/guides-actions";

export const Team = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.guides.guides);
  useEffect(() => {
    dispatch(getGuidesDataFromAPI());
  }, [dispatch]);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <RubricTitle title="Travel Guides" subTitle="Meet Our Guides" />
        <div className="row g-4">
          {teams.map((team, i) => (
            <div
              key={team.image}
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team.image} alt={i} />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: -19 }}
                >
                  {team.socialNetworks.map((socialNetwork) => (
                    <p
                      className="btn btn-square mx-1"
                      onClick={() => {}}
                      key={socialNetwork}
                    >
                      <i className={socialNetwork}></i>
                    </p>
                  ))}
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">{`${team.firstName} ${team.lastName}`}</h5>
                  <small>{team.designation}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;
