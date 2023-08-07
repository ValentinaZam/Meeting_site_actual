import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { getQualitiesByIds, getQualitiesLoadingStatus } from "../../../store/qualities";
import { useSelector } from "react-redux";

const QualitiesList = ({ qualities }) => {
    // const dispatch = useDispatch();
    const isLoading = useSelector(getQualitiesLoadingStatus());
    if (isLoading) return "Loading...";
    const qualitiesList = useSelector(getQualitiesByIds(qualities));
    // useEffect(() => {
    //     dispatch(loadQualitiesList());
    // }, []);
    return (
        <>
            {qualitiesList.map((qual) => (
                <Quality key={qual._id} {...qual} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
