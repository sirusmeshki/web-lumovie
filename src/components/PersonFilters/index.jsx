import S from "./person-filters.module.scss";

const PersonFilters = ({ groups, values, onChange }) => {
  return (
    <div className={S["filters"]}>
      {groups.map((group) => (
        <div
          key={group.key}
          className={S["group"]}
          role="group"
          aria-label={group.label}>
          {group.options.map((option) => {
            const isActive = values[group.key] === option.value;
            const isFlagOnly = Boolean(option.flag) && option.value !== "";

            return (
              <button
                key={`${group.key}-${option.value || "all"}`}
                type="button"
                className={`${S["chip"]} ${isFlagOnly ? S["chip--flag"] : ""} ${
                  isActive ? S["chip--active"] : ""
                }`}
                onClick={() => onChange(group.key, option.value)}
                aria-pressed={isActive}
                title={option.label}
                aria-label={option.label}>
                {option.flag && (
                  <img
                    className={S["flag"]}
                    src={`https://flagsapi.com/${option.flag}/flat/32.png`}
                    alt=""
                    loading="lazy"
                  />
                )}
                {option.icon && !isFlagOnly && (
                  <span className={S["icon"]}>{option.icon}</span>
                )}
                {!isFlagOnly && (
                  <span className={S["text"]}>{option.label}</span>
                )}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PersonFilters;
