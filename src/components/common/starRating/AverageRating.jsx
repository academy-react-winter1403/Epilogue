import { Rating } from '@smastrom/react-rating';
import { Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const AverageRating = ({ value = 0, count, size = 'md' }) => {
  const sizes = {
    sm: { maxWidth: 100 },
    md: { maxWidth: 120 },
    lg: { maxWidth: 150 }
  };

  return (
    <div className="flex items-center gap-1 justify-center">
      {count !== undefined && <span className=" text-sm">({count})</span>}
      <Rating
        value={value}
        readOnly
        items={5}
        radius="full"
        style={{ maxWidth: sizes[size].maxWidth }}
        itemStyles={{
          itemShapes: Star,
          activeFillColor: '#fbbf24',
          inactiveFillColor: '#e5e7eb'
        }}
      />

    </div>
  );
};

export{ AverageRating}

