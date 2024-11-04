import { Header } from "@/components/header";
import { useUserContext } from "@/context/loginContext";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  FaPlane,
  FaBed,
  FaCar,
  FaUtensils,
  FaUsers,
  FaMapMarkedAlt,
  FaRegClock,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

interface FormData {
  tripName: string;
  destinations: string;
  startDate: string;
  endDate: string;
  travelers: string;
  ageGroups: string[];
  specialRequirements: string;
  accommodationType: string;
  rooms: string;
  accommodationBudget: string;
  transportationType: string;
  pickupLocation: string;
  dropoffLocation: string;
  transportationBudget: string;
  activities: string[];
  attractions: string;
  activitiesBudget: string;
  dietaryRestrictions: string[];
  diningStyle: string[];
  mealBudget: string;
  travelPace: string;
  preferredTimes: string[];
  freeTime: string;
  additionalNotes: string;
}

interface Errors {
  [key: string]: string;
}

const TripPlan: React.FC = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const { user } = useUserContext();
  const [formData, setFormData] = useState<FormData>({
    tripName: "",
    destinations: "",
    startDate: "",
    endDate: "",
    travelers: "1",
    ageGroups: [],
    specialRequirements: "",
    accommodationType: "",
    rooms: "1",
    accommodationBudget: "",
    transportationType: "",
    pickupLocation: "",
    dropoffLocation: "",
    transportationBudget: "",
    activities: [],
    attractions: "",
    activitiesBudget: "",
    dietaryRestrictions: [],
    diningStyle: [],
    mealBudget: "",
    travelPace: "",
    preferredTimes: [],
    freeTime: "",
    additionalNotes: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      const array = formData[name as keyof FormData] as string[];
      setFormData({
        ...formData,
        [name]: checked
          ? [...array, value]
          : array.filter((item) => item !== value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let newErrors = { ...errors };

    switch (name) {
      case "tripName":
        if (!value.trim()) {
          newErrors[name] = "Trip name is required";
        } else {
          delete newErrors[name];
        }
        break;
      case "startDate":
      case "endDate":
        if (!value) {
          newErrors[name] = "Date is required";
        } else {
          delete newErrors[name];
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (user != null && formData.tripName != "") {
      toast.success("Form submitted");
      console.log(formData);
      setFormSubmit(true);
    } else {
      toast.warning("Failed to submit form");
    }
  };

  return (
    <>
      <Header />
      <img
        className="w-[100%] h-[370%] absolute heroImg"
        src="/Screenshot 2024-11-02 202513.jpg"
      />
      <img
        className="w-[100%] relative heroImg"
        src="/smiley-woman-posing-luggage-while-holding-plane-tickets-passport.jpg"
      />
      <div className="content absolute top-[155px] left-5 text-BLACK font-bold">
        <p className="ml-2 tracking-widest content1">
          WE ARE GLAD <span className="text-WHITE"> TO PLAN </span>
        </p>
        <p className="content2">
          We build <span className="text-WHITE"> Trip</span> <br />
          And Trust
          <span className="text-WHITE"> For you</span>
        </p>
      </div>
      <div className="w-[100%] h-[100%] relative mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="mt-[-320px] space-y-8">
          {/* Basic Trip Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <FaPlane className="text-blue-600" />
              Basic Trip Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="tripName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Trip Name
                </label>
                <input
                  type="text"
                  id="tripName"
                  name="tripName"
                  value={formData.tripName}
                  onChange={handleChange}
                  className={`mt-1 block w-full h-[40px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.tripName ? "border-red-500" : ""
                  }`}
                  aria-describedby={
                    errors.tripName ? "tripName-error" : undefined
                  }
                />
                {errors.tripName && (
                  <p className="mt-1 text-sm text-red-500" id="tripName-error">
                    {errors.tripName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="destinations"
                  className="block text-sm font-medium text-gray-700"
                >
                  Destination(s)
                </label>
                <input
                  type="text"
                  id="destinations"
                  name="destinations"
                  value={formData.destinations}
                  onChange={handleChange}
                  className="mt-1 block w-full h-[40px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="mt-1 block w-full h-[40px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="mt-1 block w-full h-[40px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <FaUsers className="text-blue-600" />
              Travelers' Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="travelers"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Travelers
                </label>
                <input
                  type="number"
                  id="travelers"
                  name="travelers"
                  min="1"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="mt-1 block w-full h-[40px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age Groups
                </label>
                <div className="space-y-2">
                  {["Adults", "Children", "Seniors"].map((age) => (
                    <label key={age} className="inline-flex items-center mr-4">
                      <input
                        type="checkbox"
                        name="ageGroups"
                        value={age}
                        checked={formData.ageGroups.includes(age)}
                        onChange={handleChange}
                        className="rounded border-BLACK text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <span className="ml-2">{age}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="specialRequirements"
                className="block text-sm font-medium text-gray-700"
              >
                Special Requirements
              </label>
              <textarea
                id="specialRequirements"
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                className="mt-1 block w-full  h-[40px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Accommodation Preferences */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <FaBed className="text-blue-600" />
              Accommodation Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="accommodationType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Accommodation Type
                </label>
                <select
                  id="accommodationType"
                  name="accommodationType"
                  value={formData.accommodationType}
                  onChange={handleChange}
                  className="mt-1 block w-full h-[40px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select type</option>
                  <option value="hotel">Hotel</option>
                  <option value="hostel">Hostel</option>
                  <option value="airbnb">Airbnb</option>
                  <option value="resort">Resort</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="rooms"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Rooms
                </label>
                <input
                  type="number"
                  id="rooms"
                  name="rooms"
                  min="1"
                  value={formData.rooms}
                  onChange={handleChange}
                  className="mt-1 block w-full h-[40px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Transportation Preferences */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <FaCar className="text-blue-600" />
              Transportation Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="transportationType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Preferred Transportation
                </label>
                <select
                  id="transportationType"
                  name="transportationType"
                  value={formData.transportationType}
                  onChange={handleChange}
                  className="mt-1 block w-full h-[40px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select type</option>
                  <option value="flight">Flight</option>
                  <option value="train">Train</option>
                  <option value="car">Car Rental</option>
                  <option value="bus">Bus</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="transportationBudget"
                  className="block text-sm font-medium text-gray-700"
                >
                  Transportation Budget
                </label>
                <input
                  type="number"
                  id="transportationBudget"
                  name="transportationBudget"
                  value={formData.transportationBudget}
                  onChange={handleChange}
                  className="mt-1 block w-full h-[40px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Activity Interests */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <FaMapMarkedAlt className="text-blue-600" />
              Activity Interests
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Activities
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Cultural Tours",
                    "Adventure Sports",
                    "Relaxation",
                    "Shopping",
                    "Nature Walks",
                    "Water Sports",
                  ].map((activity) => (
                    <label key={activity} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="activities"
                        value={activity}
                        checked={formData.activities.includes(activity)}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <span className="ml-2">{activity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Meals and Dining */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <FaUtensils className="text-blue-600" />
              Meals and Dining
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Restrictions
                </label>
                <div className="space-y-2">
                  {[
                    "Vegetarian",
                    "Vegan",
                    "Gluten-free",
                    "Halal",
                    "Kosher",
                  ].map((diet) => (
                    <label key={diet} className="inline-flex items-center mr-4">
                      <input
                        type="checkbox"
                        name="dietaryRestrictions"
                        value={diet}
                        checked={formData.dietaryRestrictions.includes(diet)}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <span className="ml-2">{diet}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dining Style
                </label>
                <div className="space-y-2">
                  {[
                    "Street Food",
                    "Fine Dining",
                    "Local Eateries",
                    "Food Tours",
                  ].map((style) => (
                    <label
                      key={style}
                      className="inline-flex items-center mr-4"
                    >
                      <input
                        type="checkbox"
                        name="diningStyle"
                        value={style}
                        checked={formData.diningStyle.includes(style)}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <span className="ml-2">{style}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary Preferences */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <FaRegClock className="text-blue-600" />
              Itinerary Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="travelPace"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pace of Travel
                </label>
                <select
                  id="travelPace"
                  name="travelPace"
                  value={formData.travelPace}
                  onChange={handleChange}
                  className="mt-1 block w-full h-[40px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select pace</option>
                  <option value="relaxed">Relaxed</option>
                  <option value="moderate">Moderate</option>
                  <option value="intensive">Intensive</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Times
                </label>
                <div className="space-y-2">
                  {["Morning", "Afternoon", "Evening"].map((time) => (
                    <label key={time} className="inline-flex items-center mr-4">
                      <input
                        type="checkbox"
                        name="preferredTimes"
                        value={time}
                        checked={formData.preferredTimes.includes(time)}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <span className="ml-2">{time}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Additional Notes
            </h2>
            <div>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Any other requirements or preferences..."
                className="mt-1 block w-full h-[80px] p-2 text-WHITE text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              <label htmlFor="my_modal_6" className="w-[150px] h-[150px]">
                Plan My Trip
              </label>
            </button>
          </div>
        </form>
      </div>
      {/* The button to open modal */}

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default TripPlan;
