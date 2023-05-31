import React, { useEffect, useState } from "react";

const Table = () => {
  const [count, setCount] = useState([]);
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    fetch("https://volunteer-server-ivory.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setCount(data));
  }, []);
  console.log(count);
  useEffect(() => {
    if (count) {
      fetch(`https://volunteer-server-ivory.vercel.app/services/${searchData}`)
        .then((res) => res.json())
        .then((data) => setCount(data));
    }
  }, [searchData]);

  const handelSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    setSearchData(search);
  };
  console.log(searchData);
  return (
    <div>
      <dir>
        <form onSubmit={handelSearch}>
          <div className="form-control w-1/3">
            <input
              type="search"
              placeholder="Search Name"
              name="search"
              className=" input input-bordered input-secondary "
            />
          </div>
        </form>
      </dir>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
              
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {count?.slice(0, 4).map((dt, index) => (
              <tr key={dt._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={dt.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{dt.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {dt?.Description}
                  </span>
                </td>

                <th>
                  <button className="btn btn-ghost btn-xs">{dt.date}</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default Table;
