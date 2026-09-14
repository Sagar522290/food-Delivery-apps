import React, { useState } from "react";
import {
  Star,
  Trash2,
} from "lucide-react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Rahul Kumar",
      restaurant: "Pizza Palace",
      rating: 5,
      comment: "Amazing pizza and very fast delivery!",
      date: "02 May 2024",
    },
    {
      id: 2,
      user: "Amit Singh",
      restaurant: "Burger House",
      rating: 4,
      comment: "Burger was tasty but delivery was late.",
      date: "01 May 2024",
    },
    {
      id: 3,
      user: "Priya Sharma",
      restaurant: "Biryani House",
      rating: 5,
      comment: "Excellent biryani. Highly recommended.",
      date: "30 Apr 2024",
    },
  ]);

  const deleteReview = (id) => {
    setReviews(
      reviews.filter((review) => review.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Reviews</h1>
        <p className="text-gray-500">
          Manage customer reviews
        </p>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                  {review.user.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold">
                    {review.user}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {review.restaurant}
                  </p>

                  <div className="mt-2 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={17}
                        fill={
                          star <= review.rating
                            ? "currentColor"
                            : "none"
                        }
                        className={
                          star <= review.rating
                            ? "text-orange-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => deleteReview(review.id)}
                className="self-start rounded-lg bg-red-50 p-2 text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <p className="mt-4 text-gray-700">
              {review.comment}
            </p>

            <p className="mt-3 text-xs text-gray-400">
              {review.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;