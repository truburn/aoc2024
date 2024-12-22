export default function Entry() {
  return (
    <>
      <p>
        Day 1 and we have a problem. No one can find a list of the 50 possible
        locations to check for the Chief Historian.
      </p>
      <p>
        Breaking into two groups, the Senior Historians found some notes with
        location IDs. Each group creatied a list of possible locations to
        search. But, the two lists aren't the same. So now I've gotta try to see
        how we can reconcile these lists.
      </p>
      <p>
        First, we determined the total distance between each list. This compares
        the smallest ID from the first list to the smallest ID in the second
        list and finds the difference. Then just continue on with the next ID in
        order from each list and add them up.
      </p>
      <p>
        Yup. The lists are different. It could just have been from sloppy
        handwriting. But it looks like there are IDs from the first list that
        appear in the second list. Let's take a look at that.
      </p>
      <p>
        So I counted up how many times a location ID from the first list
        appeared in the second list and then multiplied that count by the ID.
        Adding these up gave us a similiarity score between the two lists.
      </p>
    </>
  );
}
