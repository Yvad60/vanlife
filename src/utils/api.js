export const getVans = async () => {
  const response = await fetch("/api/vans");
  const data = await response.json();
  return data.vans;
};

export const getHostVans = async () => {
  const response = await fetch("/api/host/vans");
  const data = await response.json();
  return data.vans;
};

export const getSingleHostVan = async (id) => {
  const response = await fetch(`/api/vans/${id}`);
  const data = await response.json();
  return data.vans;
};
