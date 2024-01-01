import {
  Details,
  DetailsForm,
  DetailsInput,
  updatePasswordAction,
} from "@/components/UserDetails";

type DetailsPasswordProps = {
  isEditable: boolean;
};

export function DetailsPassword({ isEditable }: DetailsPasswordProps) {
  return (
    <Details>
      {(isEditing, setIsEditing) =>
        isEditing ? (
          <DetailsForm
            isEditable={isEditable}
            action={async formData => {
              try {
                await updatePasswordAction(formData);
              } catch (e) {
                console.log(e);
              } finally {
                setIsEditing(false);
              }
            }}
            discardHandler={() => setIsEditing(false)}
          >
            <div className="mb-4 grid gap-2">
              <DetailsInput
                type="password"
                name="current-pass"
                placeholder="Current Password"
              />
              <DetailsInput
                type="password"
                name="new-pass"
                placeholder="New Password"
              />
              <DetailsInput
                type="password"
                name="repeat-new-pass"
                placeholder="Repeat New Password"
              />
            </div>
          </DetailsForm>
        ) : (
          <Details.Value
            title="Password"
            value="********"
            onClick={() => setIsEditing(true)}
          />
        )
      }
    </Details>
  );
}
