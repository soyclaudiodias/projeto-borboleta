type Props = {
  params: {
    id: string;
  };
};

export default function MaterialPage({
  params,
}: Props) {

  return (
    <main className="paginaMaterial">

      <h1>
        Material: {params.id}
      </h1>

      <p>
        Página dinâmica do material.
      </p>

    </main>
  );
}